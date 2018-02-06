import React from 'react';
import {
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap';

const GifItem = (props) => {
    return (
        <div className="GifItem">
            <Card>
                <CardImg top
                         width="100%"
                         src={props.imageUrl}
                         alt={props.title}/>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <a href={props.url}
                       target="_blank"
                       className="btn btn-primary">
                        View
                    </a>
                </CardBody>
            </Card>
        </div>
    )
};

export default GifItem;