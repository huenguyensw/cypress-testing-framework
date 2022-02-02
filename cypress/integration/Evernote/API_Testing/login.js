///<reference types = "cypress"/>

var Evernote = require('evernote');
var title = new Date().getTime();

describe("API tests", () => {
    // Generate a temporary token from sandbox evernote for deverloper
    const devToken = "S=s1:U=9699b:E=1860efad120:C=17eb749a520:P=1cd:A=en-devtoken:V=2:H=1023cd7d71d42aa5c46ea49005b1ca65";

    // it("Test GetUser via API (Non UI)", () =>{
    //     var client = new Evernote.Client({token: devToken});
    //     var userStore = client.getUserStore();
    //     userStore.getUser().then(user => {
    //         cy.log(user);
    //     });
    // })
    it('Test create a new note via API', () => {
        var nBody = '<?xml version="1.0" encoding="UTF-8"?>';
        nBody += '<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">';
        nBody += "<en-note>Content " + title + "</en-note>";
        var client = new Evernote.Client({ token: devToken });
        var noteStore = client.getNoteStore();
        var ourNote = new Evernote.Types.Note();
        ourNote.title = "Design test case " + title;
        ourNote.content = nBody;
        
        noteStore.createNote(ourNote)
            .then(note => {
                console.log(note);
            })
    })
})