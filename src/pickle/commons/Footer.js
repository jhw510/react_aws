import React from 'react';
import { NavLink } from 'react-router-dom';
import {Col, Row} from 'reactstrap';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-content">
                <div className="container-fluid">
                    <Row>
                        <Col xxs="12" sm="6" widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} >
                            <p className="mb-0 text-muted">Team Bitbox 2020</p>
                        </Col>
                        <Col className="col-sm-6 d-none d-sm-block" widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} >
                            <ul className="breadcrumb pt-0 pr-0 float-right">
                                <li className="breadcrumb-item mb-0">
                                    <NavLink className="btn-link" to="#" location={{}}>
                                        Review
                                    </NavLink>
                                </li>
                                <li className="breadcrumb-item mb-0">
                                    <NavLink className="btn-link" to="#" location={{}}>
                                        Purchase
                                    </NavLink>
                                </li>
                                <li className="breadcrumb-item mb-0">
                                    <NavLink className="btn-link" to="#" location={{}}>
                                        Docs
                                    </NavLink>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
