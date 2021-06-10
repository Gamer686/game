class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = null;
    }
  
    getCount(){
      var enemyCountRef = database.ref('playerCount');
      enemyCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var enemyIndex = "enemies/enemy" + this.index;
      database.ref(enemyIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getEnemyInfo(){
      var enemyInfoRef = database.ref('players');
      enemyInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  
    getCarsAtEnd() {
      database.ref('astralEnd').on("value",(data)=>{
        this.rank = data.val();
      })
    }
  
    static updateenemyAtEnd(rank) {
      database.ref('/').update({
       enemyAtEnd:rank
      })
    }
  }
  