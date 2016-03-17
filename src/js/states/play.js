import Session from '../session'
import Scene from '../scene'

export default class Play extends Phaser.State {
    create() {
        let session = new Session({ state: this });
        let scene = new Scene({ delegate: this, session: session });

        this.session = session
        this.scene = scene
        this.game.add.button(25, 25, 'back', this.backAction, this);
        
        scene.prepare();
    }

    backAction(button) {
        this.game.state.start('Home');
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    }

}
