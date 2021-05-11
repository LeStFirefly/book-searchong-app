import React, {Component} from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import './BookListItem.sass';
import HOC from '../HOC/'; 
class BookListItem extends Component {
    state = {
        description: '',
    }

    componentDidMount() {
        this.getDescription();
    }

    getDescription = async () => {
        const {BookService} = this.props;
        const {key} = this.props.book;
        let description = '';
        
        await BookService.getBookByKey(key)
            .then(res => description = res?.description?.value);
        
        this.setState({description: description});
    }

    checkCover = (e) => {
        if (e.target.width<10) {
            e.target.src='https://xn--90aha1bhcc.xn--p1ai/img/placeholder.png';
        }
    }

    render() {
        const {book, isbn} = this.props;
        let description = this.state.description ?? 'Описание отсутствует';
        
        return (
            <Card className='bookListItem'>
                <section className='bookListItemCard'>
                    <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`} alt="Обложка книги" onLoad={(e) => this.checkCover(e)}/>
                    <CardBody>
                        <CardTitle tag="h5">{book.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{book.author_name}</CardSubtitle>
                        <CardText>Год публикации: {book.first_publish_year}</CardText>
                        <CardText className='descriptionText'>Описание:<br/>{description}</CardText>
                        <Button color="info">Подробнее</Button>
                    </CardBody>
                </section>
            </Card>
    
        );
    }
};

export default HOC()(BookListItem);
