import os
import pandas as pd
import numpy as np
from PIL import Image
import tensorflow as tf
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import tensorflowjs as tfjs

"""Contains the NN code for recognizing math symbols (numbers, variables, greek letters, etc.)"""
"""The /extracted_images directory of preprocessed images is omitted."""

size = 150
classes = 74

inp = tf.keras.Input((size, size, 3))
x = tf.keras.layers.Conv2D(32, (3,3), activation='relu')(inp)
x = tf.keras.layers.MaxPooling2D(2, 2)(x)
x = tf.keras.layers.Conv2D(64, (3,3), activation='relu')(x)
x = tf.keras.layers.MaxPooling2D(2,2)(x)
x = tf.keras.layers.Flatten()(x)
x = tf.keras.layers.Dense(512, activation='relu')(x)
x = tf.keras.layers.Dense(classes, activation='softmax')(x)

model = tf.keras.models.Model(inp, x)
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

train_datagen = ImageDataGenerator(rescale=1./255)
test_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
        "extracted_images", # source directory for preprocessed images, not included here
        target_size=(size, size),  
        batch_size=20,
        class_mode="sparse")

history = model.fit(
      train_generator,
      steps_per_epoch=100,
      epochs=100,
      validation_steps=50,
      verbose=2)

tfjs.converters.save_keras_model(model, 'models')