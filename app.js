
let that = ["No thanks, I'm good.",
 "My mother's coming.",
 "Wow, that is really hard.",
 "You really think you can go all day long?",
 "Well, you always left me satisfied and smiling...",
 "Why did you get it so big?",
 "Does the skin look red and swollen?",
 "You should put butter on it.",
 "You already did me.",
 "Put this matter to bed.",
 "I can't stay on top of you 24/7.",
 "They taste so good in my mouth.",
 "I want you to think about it long and hard.",
 "Why is this so hard?",
 "I need two men on this.",
 "Dip it in the water so it'll slide down your gullet more easily.",
 "Can you make that straighter?",
 "And up comes the toolbar.",
 "I say things like that to lighten the tension when things sort of get hard.",
 "Come again?",
 "And you were directly under her the entire time?",
 "Well, you are hardly my first!",
 "Force it in as deep as you can.",
 "It was easy to get in but impossible to rise up.",
 "Hold it in your mouth if you can't swallow.",
 "It's gonna be tight.",
 "It squeaks when you bang it.",
 "Don't make it harder than it needs to be.",
 "Get out of my nook!",
 "Would you reach over and touch his thing?",
 "This is huge.",
 "I can't force you to go down, but I can entice you.",
 "Instead you screwed me.",
 "Put it away.",
 "You need to get back on top.",
 "Get it up.",
 "The trick is to do it face down with the post in your mouth.",
 "You're making this harder than it has to be.",
 "That's easy, gimme a hard one.",
 "I'm not saying it won't be hard, but we can make it work.",
 "This is going to feel so good getting this thing off my chest.",
 "I can't believe you came."];

// document.getElementById("line").innerHTML = that[number];

function said() {
    let number = Math.floor(Math.random() * 42);
    document.getElementById("line").innerHTML = that[number];    
}

function foo() {
 said()
    setTimeout(foo, 3000);
}

foo();