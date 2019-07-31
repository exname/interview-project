<template>
    <div class="game">
        <div class="hints" @click="useHint">
            <the-hint v-for="hint in hints" :key="hint.name" :hint="hint"/>
        </div>
        <the-reward :reward="reward"/>
        <the-stairs :level="level"/>
        <the-question :q="question"/>
        <div class="answers" @click="checkAns">
            <the-button v-for="answer in answers" :an="answer" :key="answer"/>
        </div>
    </div>
</template>

<script>
    import Button from './Button'
    import Reward from './Reward'
    import Stairs from './Stairs'
    import Question from './Question'
    import Hint from './Hint'
    import axios from 'axios'
    //import $ from 'jQuery'

    export default {
        name: "Game.vue",
        components: {
            'the-button': Button,
            'the-reward': Reward,
            'the-stairs': Stairs,
            'the-question': Question,
            'the-hint': Hint
        },
        data() {
            return {
                question: null,
                level: 14,
                reward: 0,
                answers: null,
                goodAnswer: null,
                prizes: [10000, 9000, 8000, 7000, 6000, 5000, 2000, 1500, 1000, 800, 500, 200, 150, 100, 50],
                hints: [{
                    name: "50/50",
                    used: false,
                    image: require("../assets/5050.jpg")
                },
                    {
                        name: "Call a friend",
                        used: false,
                        image: require("../assets/phone.png")
                    }, {
                        name: "Help from public",
                        used: false,
                        image: require("../assets/public.png")
                    }]
            }
        },
        created() {
            this.loadQuestion();
        },
        methods: {
            loadQuestion(){
                let url=null;
                switch(this.level){
                    case 14: case 13: case 12: case 11: case 10:{
                        url="https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";
                        break;
                    }
                    case 9: case 8: case 7: case 6: case 5:{
                        url="https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple";
                        break;
                    }
                    case 4: case 3: case 2: case 1: case 0:{
                        url="https://opentdb.com/api.php?amount=1&difficulty=easy&type=hard";
                        break
                    }
                }
                axios
                    .get(url)
                    .then((obj) => {
                        this.question = obj.data.results[0].question;
                        this.answers = obj.data.results[0].incorrect_answers;
                        this.answers.push(obj.data.results[0].correct_answer);
                        this.goodAnswer = obj.data.results[0].correct_answer;
                    })
            },
            checkAns(e) {
                let givenAnswer = e.target.innerText;
                if (givenAnswer === this.goodAnswer) {
                    if (this.level >= 1) {
                        this.level--;
                        this.reward += Stairs.data().prizes[this.level + 1]
                    }
                } else {

                    let insuredReward = (((this.level / 5) >> 0) + 1) * 5;
                    if (insuredReward > 14 && this.level < 14) {
                        this.reward = Stairs.data().prizes[14];
                    } else if (this.level === 14) {
                        this.reward = 0;
                    } else {
                        this.reward = Stairs.data().prizes[insuredReward];
                    }
                    alert("Congratulation you've won : " + this.reward + " EURO")
                    this.level = 14;
                    this.reward=0;
                }
                this.loadQuestion();
            },
            useHint(e) {
                let usedHint = e.target.alt;
                this.hints.forEach((hint) => {
                    if (hint.name === usedHint && hint.used === false) {
                        hint.used = true;
                        switch (hint.name) {
                            case "50/50": {
                                let count = 0;
                                this.answers.forEach((answer) => {
                                    if (count <= 2 && answer !== this.goodAnswer) {
                                        this.answers.splice(answer, 1);
                                    }
                                });
                                break;
                            }
                            case "Call a friend": {
                                alert("I thing the right answer is " + this.answers[Math.floor(Math.random() * this.answers.length)]);
                                break;
                            }
                            case "Help from public": {
                                let rng =Math.floor(Math.random() * 10);
                                let msg ="The public select answer :";
                                if(rng<=7){
                                    msg+=this.goodAnswer;
                                }else{
                                    let found=false;
                                    this.answers.forEach((answer) => {
                                        if (found===false && answer !== this.goodAnswer) {
                                            msg+=answer;
                                            found=true;
                                        }
                                    });
                                }
                                alert(msg)
                            }
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .game {
        position: fixed;
        background-color: #2c3e50;
        height: 100%;
        width: 100%;
    }

    .answers {
        width: 80%;
        height: 40%;
        left: 20%;
        top: 30%;
        position: relative;
        display: inline-block;

    }

    .hints {
        top: 50px;
        float: right;
        position: relative;
        display: inline-block;
    }

</style>
