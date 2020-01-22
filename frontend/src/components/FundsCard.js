import React from 'react';
import { Card, Feed, Icon } from 'semantic-ui-react';
const FundsCard = ({ funds }) => {
    const renderFund = funds.map(fund =>
        <Feed>
            <Feed.Event>
                <Feed.Label><Icon name="money bill alternate" /></Feed.Label>
                <Feed.Content>
                $ {fund.amount}
                </Feed.Content>
            </Feed.Event>
        </Feed>   
    );
    
    return (
        <div>
            <Card color='green'>
                <Card.Content>
                    <Card.Header>Funds Tracker: </Card.Header>
                </Card.Content>
                <Card.Content>
                    {renderFund}
                </Card.Content>
            </Card>
        </div>
    )
};
export default FundsCard;

