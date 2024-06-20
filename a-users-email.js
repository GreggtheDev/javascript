// Declare an object to model the data of the Hotmail email application
let appData = {
    // The name of the email application
    name: 'Hotmail',
    // The name of the current user
    user: 'John Doe',
    // An array of the names of the mailboxes in the application
    mailboxes: [
        'inbox',
        'junk',
        'sent',
        'drafts'
    ],
    // An array of contact objects, each with a name and the last message from that contact
    contacts: [
        {name: 'Alex', lastMessage: "See you at the meeting tomorrow"},
        {name: 'Sam', lastMessage: "Happy Birthday!"}
    ],
    // An array of email objects, each representing an email with various properties
    emails: [
        {mailbox: 'inbox', from: 'Alex', subject: 'Meeting', text: 'See you at the meeting tomorrow', status: 'unread'},
        {mailbox: 'sent', to: 'Sam', subject: 'Re: Birthday', text: 'Thank you!', status: 'sent'},
        // etc...
    ]
}

// Log the names of the mailboxes to the console
console.log(appData.mailboxes);

// Log the array of emails to the console
console.log(appData.emails);

// Log the text of the second email in the visible list to the console
console.log(appData.emails[1].text);

// Change the status of the first email to 'sent' and log the updated email to the console
appData.emails[0].status = 'sent';
console.log(appData.emails[0]);

// Create a new draft email object, add it to the array of emails, and log the updated array to the console
let draftEmail = {mailbox: 'drafts', to: 'Alex', subject: 'Draft', text: 'This is a draft email', status: 'draft'};
appData.emails.push(draftEmail);
console.log(appData.emails);
