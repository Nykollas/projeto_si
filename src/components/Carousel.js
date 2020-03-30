import React, { Component } from 'react';

class Carousel extends Component {


    state = {
        holding:false,
    }

    onMouseUp = (event) => {
           this.setState({holding:false});
    }
    
    onMouseDown = (event) => {
        this.setState({holding:true});
    }

    onMouse = (event) => {
        this.setState({holding:false});
    }

    onDragStart = (e) => {
        e.preventDefault();
    }

    onMouseMove = (event) => {
        const {holding }  = this.state;
        const left  = this.carouselRef.scrollLeft

        if(holding ){
            if(event.movementX > 0)
                this.carouselRef.scroll({ left:left - event.movementX });
            else    
                this.carouselRef.scroll({ left:left - event.movementX });
        }
    }

    componentDidMount = (val) => {
        console.log(this.carouselRef);
    }

    render = () => {
        const data = [
            "https://www.w3schools.com/w3css/img_lights.jpg",
            "https://www.w3schools.com/w3css/img_lights.jpg",
            "https://www.w3schools.com/w3css/img_lights.jpg",
            "https://www.w3schools.com/w3css/img_lights.jpg",
        ]
        return (
            <div onDragStart={this.onDragStart}
                 onMouseUp = {this.onMouseUp}
                 onMouseDown = {this.onMouseDown}
                 onMouseMove = {this.onMouseMove}
                 ref = {comp => this.carouselRef = comp}className={"carousel-container"}>
                {data.map((value) => {
                    return <div className={"carousel-image-container"}>
                        <img className={"carousel-image"} src={value}></img>
                    </div>
                })}
            </div>
        )
    }
}

export default Carousel;