import MessageComponent from "./index.vue"

const Message = {}

Message.install = function (Vue) {
    const MessageConstructor = Vue.extend(MessageComponent);
    const instance = new MessageConstructor();

    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);

    let timer;

    const MsgMain = {
        show_message({
            msg,
            type,
            duration = 3000,
            showClose
        }) {
            clearInterval(timer);
            timer = setTimeout(() => {
                instance.visible = false;
            }, duration);
            instance.messageContent = msg;
            instance.activeClass = type;
            instance.visible = true;
            instance.showClose = showClose
        }
    }


    Vue.prototype.$message = MsgMain.show_message;
}

export default Message