require('../paho-mqtt.js');
//创建客户端实例
client = new Paho.MQTT.Client(location.hostname, Number(location.port), "clientId");

//设置回调处理程序
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

//连接客户端
client.connect({onSuccess:onConnect});


//在客户端连接时调用
function onConnect() {
  //建立连接后，进行订阅并发送消息
  console.log("onConnect");
  client.subscribe("World");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}

//当客户端失去连接时调用
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

//在消息到达时调用
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}