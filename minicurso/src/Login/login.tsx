import { Component, ReactNode } from "react";
import './login.css';
export default class Login extends Component<any>
{

    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (<div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 loginScreen">
                        <div className="row inputs justify-content-center">
                            <div className="col-12 ibox-col">
                                <div className="form-group">
                                    <label className="text-default">Login</label>
                                    <input type="text" name="codigo" className="form-control" />
                                </div>
                            </div>

                            <div className="col-12 ibox-col">
                                <div className="form-group">
                                    <label className="text-default">Senha</label>
                                    <input type="password" name="codigo" className="form-control" />
                                </div>
                            </div>

                            <div className="col-4 loginButton">
                                <button type="button" className="btn btn-primary">Login</button>
                            </div>
                            <div className="col-12 ibox-col">
                            
                            
                            
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}