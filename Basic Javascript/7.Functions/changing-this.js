
/*
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title,tag);
        });
    }
};


video.showTags();
*/



/*
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({name: 'Shivam'}, 1, 2);
playVideo.apply({name: 'Shivam'}, [1,2]);

const fn = playVideo.bind({name: 'Alok'});
fn();


playVideo();
*/




/*
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        // const self = this;
        this.tags.forEach(function(tag) {
            console.log(this.title,tag);
        }.bind(this));
    }
};


video.showTags();
*/


//from ES6 we have arrow funciton which directly refers to current object 
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(tag =>
            console.log(this.title,tag)
        );
    }
};


video.showTags();