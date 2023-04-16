// If that function is a part of an object we call that funciton a method
// If it is a method, this refer to the object.
// If this is a regular funciton, this references to global object(window object in browsers  &  global in node).


/*
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

// video.play();

video.stop = function() {
    console.log(this);
}

video.stop();
*/

/*
function playVideo() {
    console.log(this);
}

playVideo();
*/



/*
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');
*/




const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title,tag);
        }, this);
    }
};


video.showTags();