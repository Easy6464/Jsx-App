import Card from 'react-bootstrap/Card';
import Product from './Product';
import Price from './Price';
import Description from './Description';
import Name from './Name';
import Image from './Image';

function Checkpoint() {
return (
    <Card style={{ width: '50rem' }}>
        <Image/>
            <Card.Body>
                <Card.Title>
                    <Name/>
                </Card.Title>
                <Card.Text>
                    <Description/>
                </Card.Text>
                <Card.Text>
                    <Price/>
                </Card.Text>
            </Card.Body>
    </Card>
);
}

export default Checkpoint;