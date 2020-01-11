import React from 'react';
import { Card } from 'semantic-ui-react';
const FundsCard = ({ funds }) => {
    const renderFund = funds.map(fund =>
        <Card>
            <Card.Content>
                <Card.Header>Total Funds Amount:</Card.Header>
                <Card.Description>$ {fund.amount}</Card.Description>
            </Card.Content>
        </Card>
    );
    
    return (
        <div>
            {renderFund}
        </div>
    )
};
export default FundsCard;