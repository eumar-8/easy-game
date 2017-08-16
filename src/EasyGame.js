  import React,{Component}from'react';
  import alphabets from './alphabets';
  import classNames from 'classnames';


  class EassyGame  extends Component{

    constructor(props){
      super()
      this.state={
        alphabets:alphabets,
        num:0,
        numClick:0,
        renderAple:false,
        renderWord:false,
        random:false,
      }
      this.sumNum=this.sumNum.bind(this)
      this.SubsNum=this.SubsNum.bind(this)
      this.changeOfLetter=this.changeOfLetter.bind(this)
      this.switchRandom=this.switchRandom.bind(this)

}
    randomNumber(min,max){
      return Math.floor(Math.random()*(max-min+1))+min;
    }

      switchRandom(){

        this.setState({random:!this.state.random})
        console.log(this.state.random)

      }


    changeOfLetter(){
        if(this.state.numClick===0){
          this.setState({renderAple:true, numClick:this.state.numClick+1})
        }
        if(this.state.numClick===1){
          this.setState({renderWord:true, numClick:this.state.numClick+1})
          this.setState({numClick:this.state.numClick+1})
        }
        if(this.state.numClick===2){
          let newnum;
          if(this.state.num<alphabets.length-1){
            newnum=this.state.num+1
          }
          if(this.state.num>=alphabets.length-1)  {
            newnum=0
          }
          if(this.state.random===true) {
            this.setState({renderWord:false, renderAple:false, numClick:0,num:this.randomNumber(0,25)})
          } else {
            this.setState({renderWord:false, renderAple:false, numClick:0, num:newnum})
          }
        }
      }



    sumNum(){
      if(this.state.num<alphabets.length-1){
        this.setState({num:this.state.num+1})
      }else{
        this.setState({num:0})
       }

      }

    SubsNum(){
    if(this.state.num>0){
      this.setState({num:this.state.num -1})
    }else{
      this.setState({num:alphabets.length-1})
     }

   }

    render(){
      return(
      <div className="game">
      <span className='random-label'>Random letters:</span>
      <label className='switch'>
       <input type="checkbox"
        defaultValue='false'
        onClick={this.switchRandom}
        checked={this.state.random}/>
        <div className="slider round"></div>
        </label>
        <div className='fields'>
          <div className='options'onClick={this.sumNum}>
            <div className='field-block'> {this.state.alphabets[this.state.num].letter} </div>

           </div>
         </div>
         <div className='buttons'>
          <a className="button prev" onClick={this.SubsNum} >Previus</a>
          <a className="button sound">Play sound again</a>
          <a className="button next" onClick={this.changeOfLetter}>Next</a>
        </div>
        <div className='fields'>
          <div className='field-block'>
            <div className='  field-left'>
              <p className={classNames("hide-phase-img",{'hide':this.state.renderAple})}> click next for image </p>
             <div className={classNames({'hide':!this.state.renderAple})}><img className="show-img images"src={this.state.alphabets[this.state.num].image} alt={this.state.alphabets[this.state.num].word}/>
            </div></div>
            <div className=' field-rigth'>
              <p className={classNames({'hide':this.state.renderWord})}>click here for spelling</p>
              <div className={classNames({'hide':!this.state.renderWord})}><p className="words">{this.state.alphabets[this.state.num].word.toUpperCase() }</p>
            </div></div>
           </div>
         </div>
      </div>
      )
    }
  }

  export default EassyGame;
