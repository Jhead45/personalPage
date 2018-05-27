import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SkillDisplay = (props) => {
    console.log(props.value);

    switch (props.value) {
        case 'languages':
            return (
                <div className="col-md-10 myColor d-flex flex-column h-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="display-3">Languages</h1>
                        <ul>
                            <li><h2>HTML</h2></li>
                            <li><h2>CSS</h2></li>
                            <li><h2>JavaScript</h2></li>
                            <li><h2>ES6 / ECMAScript 5</h2></li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            What is it?
                        </button>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel">
                                            Libraries & Frameworks
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        HTML - <br />
                                        <p>
                                            HTML (Hypertext Markup Language) is
                                            the set of markup symbols or codes
                                            inserted in a file intended for
                                            display on a World Wide Web browser
                                            page
                                        </p>{' '}
                                        <br />
                                        CSS - <br />
                                        <p>
                                            CSS Cascading Style Sheets is a
                                            style sheet language used for
                                            describing the presentation of a
                                            document written in a markup
                                            language like HTML
                                        </p>
                                        <br />
                                        JavaScript - <br />
                                        <p>
                                            JavaScript can interact with HTML
                                            source code, enabling Web authors to
                                            spice up their sites with dynamic
                                            content.{' '}
                                        </p>
                                        <br />
                                        ES6 / ECMAScript 5 - <br />
                                        <p>
                                            ES6 and ECMAScript 5 are versions of
                                            JavaScript that introduces new
                                            features and syntax.
                                        </p>
                                        <br />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'frameworks':
            return (
                <div className="col-md-10 myColor d-flex flex-column h-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="display-3 text-center">Libraries<br /> & Frameworks</h1>
                        <ul>
                            <li><h2>Bootstrap</h2></li>
                            <li><h2>JQuery</h2></li>
                            <li><h2>ReactJS</h2></li>
                            <li><h2>Node.Js & Express</h2></li>
                            <li><h2>React Native</h2></li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            What is it?
                        </button>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel">
                                            Libraries & Frameworks
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Library - <br />
                                        <p>
                                            A software library generally
                                            consists of pre-written code,
                                            classes, procedures, scripts,
                                            configuration data and more.
                                            Typically, a developer might
                                            manually add a software library to a
                                            program to achieve more
                                            functionality or to automate a
                                            process without writing code for it.
                                        </p>{' '}
                                        <br />
                                        Framework - <br />
                                        <p>
                                            A software framework is a universal,
                                            reusable software environment that
                                            provides particular functionality as
                                            part of a larger software platform
                                            to facilitate development of
                                            software applications, products and
                                            solutions.
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'concepts':
            return (
                <div className="col-md-10 myColor d-flex flex-column h-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="display-2">Concepts</h1>
                        <ul>
                            <li><h2>DOM / Document Object Model</h2></li>
                            <li><h2>Object-Oriented Programing</h2></li>
                            <li><h2>REST / CRUD</h2></li>
                            <li><h2>User Authentication & Authorization</h2></li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            What is it?
                        </button>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel">
                                            Concepts
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        DOM / Document Object Model - <br />
                                        <p>
                                            Document Object Model defines the
                                            logical structure of documents and
                                            the way a document is accessed and
                                            manipulated
                                        </p>{' '}
                                        <br />
                                        Object-Oriented Programing - <br />
                                        <p>
                                            Stands for "Object-Oriented
                                            Programming." OOP (not Oops!) refers
                                            to a programming methodology based
                                            on objects, instead of just
                                            functions and procedures.
                                        </p>
                                        <br />
                                        REST - <br />
                                        <p>
                                            REST stands for Representational
                                            State Transfer, an architectural
                                            style designed for distributed
                                            hypermedia, or an Application
                                            Programming Interface. API requests
                                            are built with REST using GET, PUT,
                                            POST, & DELETE requests.
                                        </p>
                                        <br />
                                        CRUD - <br />
                                        <p>
                                            CRUD is an acronym for CREATE, READ,
                                            UPDATE, DELETE. These form the
                                            standard database commands that are
                                            the foundation of CRUD.
                                        </p>
                                        <br />
                                        User Authentication & Authorization -{' '}
                                        <br />
                                        <p>
                                            User authentication is the
                                            verification of an active
                                            human-to-machine transfer of
                                            credentials required for
                                            confirmation of a user’s
                                            authenticity
                                        </p>
                                        <br />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'databases':
            return (
                <div className="col-md-10 myColor d-flex flex-column h-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="display-2">Databases</h1>
                        <ul>
                            <li><h1>SQL / MySQL</h1></li>
                            <li><h1>NoSQL / MongoDB</h1></li>
                            <li><h1>Transact-SQL</h1></li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            What is it?
                        </button>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel">
                                            Databases
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        SQL / MySQL - <br />
                                        <p>
                                            SQL (Structured Query Language) is a
                                            standardized programming language
                                            used for managing relational
                                            databases and performing various
                                            operations on the data in them.
                                            MySQL is an open source relational
                                            database management system (RDBMS)
                                            based on Structured Query Language
                                        </p>{' '}
                                        <br />
                                        NoSQL / MongoDB - <br />
                                        <p>
                                            NoSQL is a non-relational database
                                            that stores and accesses data using
                                            key-values. Instead of storing data
                                            in rows and columns like a
                                            traditional database, a NoSQL DBMS
                                            stores each item individually with a
                                            unique key.MongoDB is a
                                            cross-platform and open-source
                                            document-oriented database, a kind
                                            of NoSQL database.
                                        </p>
                                        <br />
                                        Transact-SQL - <br />
                                        <p>
                                            T-SQL (Transact-SQL) is a set of
                                            programming extensions from Sybase
                                            and Microsoft that add several
                                            features to the Structured Query
                                            Language (SQL), including
                                            transaction control, exception and
                                            error handling, row processing and
                                            declared variables.
                                        </p>
                                        <br />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'methods':
            return (
                <div className="col-md-10 myColor d-flex flex-column h-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="display-4 text-center">
                            Software Development Methodologies
                        </h1>
                        <ul>
                            <li><h2>Agile</h2></li>
                            <li><h2>Scrum</h2></li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            What is it?
                        </button>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel">
                                            Software Development Methodologies
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Agile Methods - <br />
                                        <p>
                                            Agile software development refers to
                                            a group of software development
                                            methodologies based on iterative
                                            development, where requirements and
                                            solutions evolve through
                                            collaboration between
                                            self-organizing cross-functional
                                            teams.
                                        </p>{' '}
                                        <br />
                                        Scrum Process - <br />
                                        <p>
                                            A Scrum process is distinguished
                                            from other agile processes by
                                            specific concepts and practices,
                                            divided into the three categories of
                                            Roles, Artifacts, and Time
                                            Boxes.Scrum processes enable
                                            organizations to adjust smoothly to
                                            rapidly-changing requirements, and
                                            produce a product that meets
                                            evolving business goals.
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'environments':
            return (
                <div className="col-md-10 myColor d-flex flex-column h-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="display-3 text-center">
                            Development Environments
                        </h1>
                        <ul>
                            <li><h2>Heroku</h2></li>
                            <li><h2>Amazon Web Services (AWS)</h2></li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            What is it?
                        </button>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel">
                                            Development Environments
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Heroku - <br />
                                        <p>
                                            Heroku is a cloud platform that lets
                                            companies build, deliver, monitor
                                            and scale apps — we're the fastest
                                            way to go from idea to URL,
                                            bypassing all those infrastructure
                                            headaches.
                                        </p>{' '}
                                        <br />
                                        Amazon Web Services - <br />
                                        <p>
                                            Amazon Web Services (AWS) is a
                                            secure cloud services platform,
                                            offering compute power, database
                                            storage, content delivery and other
                                            functionality to help businesses
                                            scale and grow.
                                        </p>{' '}
                                        <br />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        default:
            return (
                <div className="col-md-10 myColor d-flex flex-column h-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="display-4 text-center">
                            Click Section to View Skills.
                        </h1>
                    </div>
                </div>
            );
    }
};

export default SkillDisplay;
