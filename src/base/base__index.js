import {render} from 'react-dom';
import React, { Component } from 'react';

function indexApp(props) {
  return (
    <container className={'page-wrapper TEST'}>
      {props.header}
      {props.content}
      {props.footer}
    </container>
  );
}

function defineApp() {
    return (
        <indexApp
            header={
                <header />
            }
            content={
                <content />
            } 
            footer={
                <footer />
            } 
        />
    );
}