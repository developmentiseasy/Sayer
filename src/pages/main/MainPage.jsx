import React, { Component } from 'react'

class MainPage extends Component {

    renderPageBody = () => {
        return (
            <div className="row">
                <div className="col-md-12">
                    MainPage
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container MainPage">
                { this.renderPageBody() }
            </div>
        )
    }
}

export default MainPage
