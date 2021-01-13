import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextBox from './components/TextBox';
import Scene from './components/Scene';
import AttackButtons from './components/AttackButtons';
import EventButtons from './components/EventButtons';
import NpcButtons from './components/NpcButtons';
import Counter from './components/Counter';

import enemy1 from './assets/temp2.png';
import enemy2 from './assets/temp3.png';
import enemy3 from './assets/temp4.png';
import enemy4 from './assets/temp5.png';
import fairy from './assets/fairy.png';
import npc from './assets/npc.png';

class RPG extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      player: {hp: 100, attack: 10, def: 0, range: 5},
      enemy: {hp: 100, attack: 8, range: 3},
      messageHistory: [{text: "The challenge begins!", style: ''}],
      totalKilled: 0,
      eventType: ''
    }

    this.onPlayerAttack = this.onPlayerAttack.bind(this);
    this.onPlayerDefend = this.onPlayerDefend.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onDeny = this.onDeny.bind(this);
    this.onAccept = this.onAccept.bind(this);
  }

  componentDidMount(){
    this.getEnemy();
  }



//FUNCTION FOR ADDING LINES, second param is for class
  addLine(msg = '==========================================================', cls){
    let temp = this.state.messageHistory;
    if(cls){
      temp.push({text: msg, class: cls});
    }
    else{
      temp.push({text: msg, class:''});
    }
    this.setState(state => ({messageHistory: temp}));
  }



//FUNCTIONS FOR BUTTONS
  onPlayerAttack(){
    let temp = this.state;
    let dmg = this.generateDamage(temp.player.attack, temp.player.range);
    temp.enemy.hp -= dmg;

    if(temp.enemy.hp <= 0){
      this.killEnemy();
    }
    else{
      this.setState(state => (temp));
      this.addLine("You did "+ dmg + " points of damage!");
      this.onEnemyAttack(this.state.player.def);
    }
  }

  onPlayerDefend(){
    this.addLine("The best defense is an even better offense!  YOU ATTACK!!!", "defense");
    this.onPlayerAttack();
  }

  onNext(){
    this.getNextEvent();
  }

//generate random npc event
  onAccept(){
    let x = Math.floor(Math.random() * Math.floor(5))
    switch(x){
      case 0:
        this.addLine("The stranger offers you a healthy snack!  You feel better after enjoying some trail mix.");
        this.addLine("You are healed 15 hit points!");
        this.setState(state => ({player: {...state.player, hp: (state.player.hp + 15)}}));
        this.getNextEvent();
        break;
      case 1:
        this.addLine("The stranger is a travelling weaponsmith who wants to help you on your quest.");
        this.addLine("\"I have some helpful gear for you!\"");
        this.addLine("They give you a new sword enchanted with extra sharpness.  You'll have an easier time cutting through enemies!")
        this.setState(state => ({player: {...state.player, attack: (state.player.attack + 1)}}));
        console.log(this.state.player)
        this.getNextEvent();
        break;
      case 2:
        this.addLine("The stranger is a travelling armorsmith who wants to help you on your quest.");
        this.addLine("\"I have some helpful gear for you!\"");
        this.addLine("They give you a new shield enchanted with extra thickness.  You'll take less damage from enemy attacks!")
        this.setState(state => ({player: {...state.player, def: (state.player.def + 2)}}));
        console.log(this.state.player)
        this.getNextEvent();
        break;
      case 3:
        this.addLine("The stranger holds out their hand to you.  A strange blue glow envelopes your body.  As the glow fades, so too do your aches and pains.  You look up to thank the stranger, but they have already vanished.");
        this.addLine("You are healed 50 hit points!");
        this.setState(state => ({player: {...state.player, hp: (state.player.hp + 50)}}));
        this.getNextEvent();
        break;
      case 4:
        this.addLine("\"Come closer, my dear...  I have something to show you...\"");
        this.addLine("You walk up closer to the mysterious stranger in a cloak.  Just as you get the feeling something is off, they reach into their cloak and fling some kind of powder at your face. The stranger cackles and disappears without a trace while you desperately rub the powder out of your eyes.");
        this.addLine("After a few minutes of painful burning, you manage to blink away the blurriness from your vision, but you have taken 5 points of damage.")
        this.setState(state => ({player: {...state.player, hp: (state.player.hp - 5)}}));
        this.getNextEvent();
        break;
    }
  }

  onDeny(){
    this.addLine("The stranger gives you a weird look as you ignore them.  All they had wanted to do was help... but maybe it's better to execise caution this time.");
    this.getNextEvent();
  }

  generateDamage(dmg, rng){
    return (Math.floor(Math.random() * Math.floor(rng))) + dmg;
  }

  onEnemyAttack(def){
    let temp = this.state;
    let damage = this.generateDamage(temp.enemy.attack, temp.enemy.range) - def;
    temp.player.hp -= damage;
    this.setState(state => temp);
    this.addLine("The enemy did " + damage + " points of damage to you!", "damage");
  }

  killEnemy(){
    this.addLine("You killed the enemy! 🎉")
    this.setState(state => ({totalKilled: state.totalKilled + 1}));
    this.getNextEvent();
  }

//FUNCTIONS FOR GENERATING NEXT ENCOUNTER
  getEnemy(){
    this.setState(state => ({eventType: "enemy"}));
    let enemyList = [{hp: 65, maxhp: 65, attack: 5, range: 3, img: enemy1, intro: "A giant enemy crab appears!"},
    {hp: 45, maxhp: 45, attack: 7, range: 5, img: enemy2, intro: "You're beset by an evil centipede!"},
    {hp: 30, maxhp: 30, attack: 5, range: 3, img: enemy3, intro: "A gross gremlin comes forth!"},
    {hp: 25, maxhp: 25, attack: 10, range: 10, img: enemy4, intro: "A slime blocks your way!"}];

    let tempEnemy = enemyList[Math.floor(Math.random() * Math.floor(enemyList.length))];

    this.setState(state => ({enemy: tempEnemy}));
    this.addLine(tempEnemy.intro, "intro");
  }

  getHealing(){
    this.setState(state => ({eventType: "healing"}));
    this.setState(state => ({enemy: {hp: 0, attack: 30, range: 0, img: fairy, intro:""}}));
    this.addLine("✨A helpful fairy has come to help!✨", "intro");
    this.addLine("\"Brave warrior, allow me to use my magic to take care of your wounds.\"", 'fairy')
    this.addLine("You are healed for 30 hit points!  Aren't you lucky?")

    let tempPlayer = this.state.player;
    tempPlayer.hp += 30;
    this.setState(state => ({player: tempPlayer}));
  }

  getNpc(){
    this.setState(state => ({eventType: "npc",
    enemy: {hp: 0, attack: 0, range: 0, img: npc, intro:"ok"}}));
    this.addLine("An npc appeared!", "intro");
  }

//Randomly pick next event from selection of scenarios: battle, healing, random event
  getNextEvent(){
    let x = Math.floor(Math.random() * Math.floor(100))
    this.addLine();
    if(x <= 65){
      this.getEnemy();
    }
    else if(x > 65 && x <= 85){
      this.getHealing();
    }
    else{
      this.getNpc();
    }
  }

  render(){
    const eventType = this.state.eventType;
    let buttons;
    switch(eventType){
      case 'enemy':
        buttons = <AttackButtons onPlayerAttack={this.onPlayerAttack} onPlayerDefend={this.onPlayerDefend}/>
        break;
      case 'healing':
        buttons = <EventButtons onNext={this.onNext}/>
        break;
      case 'npc':
      buttons = <NpcButtons onAccept={this.onAccept} onDeny={this.onDeny} />
    }


      return(
      <div>
        <Counter totalKilled={this.state.totalKilled}/>
        <Scene enemyImg={this.state.enemy.img} enemyHP={(this.state.enemy.hp/this.state.enemy.maxhp)*100} playerHP={this.state.player.hp}/>
        <TextBox data={this.state}/>
        {buttons}
      </div>
    );
  }
}

export default RPG
