import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import './BookListItem.sass';

const BookListItem = () => {
    return (
        <Card className='bookListItem'>
            <section style={{display: 'flex'}}>
                <img src="http://covers.openlibrary.org/b/isbn/0385472579-M.jpg" alt="Обложка книги"/>
                <CardBody>
                    <CardTitle tag="h5">Название книги</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Автор книги</CardSubtitle>
                    <CardText>Год</CardText>
                    <CardText>ISBN</CardText>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="info">Подробнее</Button>
                </CardBody>
            </section>
        </Card>

      );
};

export default BookListItem;