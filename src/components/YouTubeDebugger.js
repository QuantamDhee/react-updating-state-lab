// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state ={
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }

        }
    }

    render(){
        return (
            <div>
                <button className= 'bitrate' onClick={this.bitRateHandler}>
                    bitRate
                </button>
                <button className = 'resolution' onClick={this.resHandler}>
                    resolution
                </button>
            </div>
        )
    }

    bitRateHandler = event =>{
        console.log('bitRateHandler')
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resHandler = event =>{
        console.log('resHandler')
        this.setState({
            settings: {
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
            }
        })
    }
}