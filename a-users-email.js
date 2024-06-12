<<<<<<< HEAD
const gmailData = {
    mailboxes: {
      inbox: [
        {
          from: 'angk@example.com',
          to: 'me@example.com',
          subject: 'Meeting Update',
          body: 'The meeting has been rescheduled to 3 PM.',
          date: new Date('2024-06-12T15:00:00')
        },
        {
          from: 'csant@example.com',
          to: 'me@example.com',
          subject: 'Proposal',
          body: 'Attached is a business proposal for your review.',
          date: new Date('2024-06-13T10:00:00')
        },
        {
          from: 'del@example.com',
          to: 'me@example.com',
          subject: 'Greetings!',
          body: 'Wishing you a wonderful birthday!',
          date: new Date('2024-06-14T00:00:00')
        }
      ],
      junk: [],
      sent: [],
      drafts: []
    },
    contacts: {
      Angela: 'angk@example.com',
      Chris: 'csant@example.com',
      Del: 'del@example.com',
    }
  };
  
  function getMailboxNames() {
    return Object.keys(gmailData.mailboxes);
  }
  
  function getEmailsFromMailbox(mailboxName) {
    return gmailData.mailboxes[mailboxName] || [];
  }
  
  function getSecondEmailText() {
    return gmailData.mailboxes.inbox[1]?.body || 'No second email found.';
  }
  
  function markEmailAsSent(emailIndex) {
    if (emailIndex >= 0 && emailIndex < gmailData.mailboxes.inbox.length) {
      const emailToSend = gmailData.mailboxes.inbox.splice(emailIndex, 1)[0];
      gmailData.mailboxes.sent.push(emailToSend);
    } else {
      console.error('Invalid email index.');
    }
  }
  
  function addDraftEmail(draftEmail) {
    if (draftEmail && draftEmail.from && draftEmail.to && draftEmail.subject && draftEmail.body) {
      gmailData.mailboxes.drafts.push(draftEmail);
    } else {
      console.error('Invalid draft email details.');
    }
  }
  
  console.log('Mailbox Names:', getMailboxNames());
  console.log('Inbox Emails:', getEmailsFromMailbox('inbox'));
  console.log('Second Email Text:', getSecondEmailText());
  
  if (gmailData.mailboxes.inbox.length > 0) {
    markEmailAsSent(0);
  }
  
  addDraftEmail({
    from: 'you@example.com',
    to: 'recipient@example.com',
    subject: 'Draft Email Subject',
    body: 'This is a draft email.'
  });
=======
const gmailData = {
    mailboxes: {
      inbox: [
        {
          from: 'angk@example.com',
          to: 'me@example.com',
          subject: 'Meeting Update',
          body: 'The meeting has been rescheduled to 3 PM.',
          date: new Date('2024-06-12T15:00:00')
        },
        {
          from: 'csant@example.com',
          to: 'me@example.com',
          subject: 'Proposal',
          body: 'Attached is a business proposal for your review.',
          date: new Date('2024-06-13T10:00:00')
        },
        {
          from: 'del@example.com',
          to: 'me@example.com',
          subject: 'Greetings!',
          body: 'Wishing you a wonderful birthday!',
          date: new Date('2024-06-14T00:00:00')
        }
      ],
      junk: [],
      sent: [],
      drafts: []
    },
    contacts: {
      Angela: 'angk@example.com',
      Chris: 'csant@example.com',
      Del: 'del@example.com',
    }
  };
  
  function getMailboxNames() {
    return Object.keys(gmailData.mailboxes);
  }
  
  function getEmailsFromMailbox(mailboxName) {
    return gmailData.mailboxes[mailboxName] || [];
  }
  
  function getSecondEmailText() {
    return gmailData.mailboxes.inbox[1]?.body || 'No second email found.';
  }
  
  function markEmailAsSent(emailIndex) {
    if (emailIndex >= 0 && emailIndex < gmailData.mailboxes.inbox.length) {
      const emailToSend = gmailData.mailboxes.inbox.splice(emailIndex, 1)[0];
      gmailData.mailboxes.sent.push(emailToSend);
    } else {
      console.error('Invalid email index.');
    }
  }
  
  function addDraftEmail(draftEmail) {
    if (draftEmail && draftEmail.from && draftEmail.to && draftEmail.subject && draftEmail.body) {
      gmailData.mailboxes.drafts.push(draftEmail);
    } else {
      console.error('Invalid draft email details.');
    }
  }
  
  console.log('Mailbox Names:', getMailboxNames());
  console.log('Inbox Emails:', getEmailsFromMailbox('inbox'));
  console.log('Second Email Text:', getSecondEmailText());
  
  if (gmailData.mailboxes.inbox.length > 0) {
    markEmailAsSent(0);
  }
  
  addDraftEmail({
    from: 'you@example.com',
    to: 'recipient@example.com',
    subject: 'Draft Email Subject',
    body: 'This is a draft email.'
  });
>>>>>>> 7589c91c2eea418a3670ad0d572a83bb8ef43428
  // *all done* //