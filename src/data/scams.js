const scamTypes = [
    {
        type: 'UPI Fraud',
        description: 'UPI Fraud involves tricking individuals into making payments via UPI platforms to fraudsters posing as legitimate entities.',
        warningSigns: [
            'Requests for personal information or PIN.',
            'Unsolicited payment requests.',
            'Pressure to act quickly.'
        ]
    },
    {
        type: 'Fake Calls',
        description: 'Fake Calls are scams where fraudsters impersonate officials or trusted figures over the phone to extract money or personal details.',
        warningSigns: [
            'Urgent requests for money or information.',
            'Demand for secrecy about the call’s content.',
            'Uncommon caller ID or number.'
        ]
    },
    {
        type: 'Phishing SMS',
        description: 'Phishing SMS are text messages that attempt to lure recipients into revealing sensitive information or clicking malicious links.',
        warningSigns: [
            'Unexpected messages from unknown numbers.',
            'Links to login pages that impersonate legitimate services.',
            'Urgent tone or threats of account closure.'
        ]
    },
    {
        type: 'Social Media Scams',
        description: 'Social Media Scams occur when fraudsters use social networks to scam individuals through fake profiles or posts.',
        warningSigns: [
            'Unsolicited friend requests or messages.',
            'Offers that seem too good to be true.',
            'Requests for money or personal information in DMs.'
        ]
    }
];

module.exports = scamTypes;