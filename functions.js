
$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
var text = "whois darren.kitchen<br><br>Darren Kitchen is the founder of Hak5 &mdash; an organization dedicated to educating and equipping cybersecurity professionals. Since 2005 his award winning podcasts have inspired generations. As the longest running series on YouTube, Hak5 has reached hundreds of millions worldwide.<br><br>Starting his early career with BASIC on an IBM PC-XT, Kitchen found a lifelong passion for programming. Curiosity and a 1200 baud modem led him to the hacker underground. Text files from pre-Internet BBSes influenced his first creations &mdash; phone-phreak boxes and e-zines.<br><br>In 2005, with a fondness for the solace he found in early cyberspace, Kitchen founded Hak5. In doing so he embarked on a lifelong mission to foster a community where all hackers belong.<br><br>Today Kitchen is an author, speaker and cybersecurity innovator. As a product designer, he holds patents for NIST recognized industry standards. As a security researcher, he is credited as the inventor of keystroke injection, payload frameworks and hotplug attack techniques.<br><br>Kitchen's contributions and appearances include G4TechTV (Call for Help), CNET (Buzz Out Loud), TWiT (TNT), CBS (NCIS: Hawai'i, FBI, Person of Interest), HBO (Silicon Valley), National Geographic (Breakthrough: Cyber Terror), USA (Mr. Robot), Ubisoft (Watchdogs 2), NBC (Blacklist), Universal (Jason Bourne), CW (Gotham Knights), Netflix (Kaleidoscope), Wired Magazine, the New York Times, and Adventures of Superman (issue 648).<br><br>Kitchen also pwns at UT, CS and Q3.<br><br>Contact: <a href='https://twitter.com/hak5darren'>@Hak5Darren</a>, <a href='mailto:darren@hak5.org'>darren@hak5.org</a><br><br><br>#";
    type(text);
});

function type(text, new_caption_length) {
    captionLength = new_caption_length || 0;

    $('#caption').html(text.substr(0, captionLength++));
    if(captionLength < text.length+1) {
        setTimeout(function(){
            type(text, captionLength);
        }, 1);
    }
}

function erase() {
    caption = $('#caption').html();
    captionLength = caption.length;
    if(captionLength > 0){
        $('#caption').html(caption.substr(0, captionLength-1));
        setTimeout(function(){
            erase();
        }, 1);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

function pi() {
    erase();
    var text='.MMMMM7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7MMMMM<br>&nbsp;&nbsp;ZMMMM7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888888888888888888888&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.8888888888888888888888&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.88888888888888888888&nbsp;.&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMM&nbsp;.88888888:&nbsp;&nbsp;..&nbsp;&nbsp;..&nbsp;..&nbsp;.&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMMMMMMMMMMMMMM:.&nbsp;&nbsp;&nbsp;.MMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;MMMMM.&nbsp;.888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMMMMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;.MMMMMMM?&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;?MMMMM&nbsp;&nbsp;&nbsp;888888888.&nbsp;.&nbsp;..888:.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMMMM=MMMMMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;MMMM&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;.888888888888888888888:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;$MMMM&nbsp;NMMMM&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMM&nbsp;&nbsp;&nbsp;.88888888888888888888888.&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;&nbsp;MMMM.&nbsp;&nbsp;MMMM~&nbsp;&nbsp;&nbsp;MMO&nbsp;MIMMMMI.8888888888.~=88888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMM=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;MMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;MMM&nbsp;&nbsp;&nbsp;&nbsp;MMMM.88888888.&nbsp;&nbsp;&nbsp;&nbsp;$888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMM&nbsp;&nbsp;MMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;MMM&nbsp;&nbsp;&nbsp;&nbsp;MMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;MMMM&nbsp;MMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;.&nbsp;&nbsp;&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;MMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;78888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;MMMMMI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~MMMMM&nbsp;MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMM,MMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;MMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;78DZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88888888..&nbsp;&nbsp;&nbsp;&nbsp;88888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.8888888888&nbsp;&nbsp;&nbsp;.8888888888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.888888888&nbsp;&nbsp;&nbsp;&nbsp;8888888888,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;.888888888.&nbsp;&nbsp;&nbsp;78888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~8888888888&nbsp;&nbsp;8888888888~.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888888888888888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888888888888888888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;7Ru57&nbsp;y0uR&nbsp;73(Hn01u57&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;eef5204d6a88&nbsp;.<br>&nbsp;&nbsp;';
    type(text);
}

function cow() {
    erase();
    var text='<br/>&nbsp;,__,<br/>&nbsp;(oo)____<br/>&nbsp;(__)&nbsp;&nbsp;&nbsp;&nbsp;)\\<br/>&nbsp;&nbsp;&nbsp;&nbsp;||--|| *<br/>Seb WINS the cow game. Happy Birthday!';
    type(text);
}
