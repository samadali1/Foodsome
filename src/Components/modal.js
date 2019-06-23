import React, { Component } from 'react';
import Rbg from '../Assets/Wallpaper/rbg.jpg';
class Md extends Component {
    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Open modal
                </button>

                <div class="modal fade" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-body">
                                <img src={Rbg} width='100%' height='150px'/>
                </div>


                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Md;