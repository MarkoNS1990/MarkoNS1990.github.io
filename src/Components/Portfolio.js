import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className=" columns portfolio-item">
           
        <div className="row myrow">
          <div className="left-side col-md-3">   
            <a href={projects.url} title={projects.title} target="_blank">
               <img alt={projects.title} src={projectImage} />
            </a>
          </div>     
          <div className="col-md-9">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                    <div className="links display-flex">
                     <a href={projects.github} target="_blank"><p class='gh-link'><i class="fa fa-github"> Github </i></p></a>
                    <a href={projects.github} target="_blank"><p class='gh-link'><i class="fa fa-arrow-circle-right"> Live Demo </i></p></a> 
                    </div>
          </div>
         </div>
          
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works. <br/> Click on image for live preview.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
