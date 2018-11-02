import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import SaveBtn from "../../components/SaveBtn";
//import API from "../../utils/API"
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import cheerio from 'cheerio';
import request from 'request'


class Articles extends Component {
  // Initialize this.state.books as an empty array
  state = {
    songs: [],
    saved: []
  };

  // Add code here to get all books from the database and save them to this.state.books

    componentDidMount() {
    this.loadSongs();
   // this.loadSaved();
  };

  loadSongs = () => {
      this.loadBandcamp();

    
  };

  loadBandcamp = () =>{
      

  }

//   loadArticles = () => {
//     API.getArticles()
//       .then(res => this.setState({ articles: res.data }))
//       .catch(err => console.log(err));
//   };

//   saveArticle = article => {
//     API.saveArticle(article)
//     .then(API.getSaved()
//             .then(res => this.setState({ saved: res.data }))
//             .catch(err => console.log(err)))
//     .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title ) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBookss())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
      <Container fluid>
        <Row>
         
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Music</h1>
            </Jumbotron>
            {this.state.songs.length ? (
              <List>
                {this.state.songs.map(song => (
                  <ListItem key={song._id}>
                    <a href={song.url}>
                      <strong>
                        {song.title} 
                      </strong>
                    </a>  
                     {/* <SaveBtn onClick={() => this.saveArticle(article)}/> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Saved</h1>
            </Jumbotron>
            {this.state.saved.length ? (
              <List>
                {this.state.saved.map(song => (
                  <ListItem key={song._id}>
                    <a href={"/saved/" + song._id}>
                      <strong>
                        {song.title} 
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;