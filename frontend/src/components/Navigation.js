import Container from 'react-bootstrap/Container';

function Navigation(){
    return (
        <Container>
        <div class="bs-example">
    <ul class="nav nav-pills nav-fill w-100">
        <li class="nav-item">
            <a href = "/#" class="nav-link active">Home</a>
        </li>
        <li class="nav-item">
            <a href = "/#" class="nav-link">Convert</a>
        </li>
        <li class="nav-item">
            <a href = "/#" class="nav-link">About</a>
        </li>
        <li class="nav-item">
            <a href = "/#" class="nav-link">Login</a>
        </li>
        <li class="nav-item">
            <a href = "/#" class="nav-link">Signup</a>
        </li>
    </ul>
</div>
</Container>
    );
}

export default Navigation;