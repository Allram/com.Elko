'use strict';

const Homey = require('homey');
const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

const maxBrightness = 255;

class ESH316GLEDREMOTE extends ZigBeeDevice {

  onMeshInit() {
    //this.enableDebug();
    //this.printNode();
    this.setAvailable();


		this.registerReportListener('genOnOff', 'toggle', this.toggleCommandParser.bind(this));
		this.registerReportListener('genLevelCtrl', 'step', this.stepCommandParser.bind(this));

		this.switchToggleTriggerDevice = new Homey.FlowCardTriggerDevice('ESH316GLEDREMOTE_toggle').register();
       	this.switchDimTriggerDevice = new Homey.FlowCardTriggerDevice('ESH316GLEDREMOTE_dim').register().registerRunListener((args, state, callback) => {
        	return callback(null, args.action === state.action);
      });
	}

	toggleCommandParser(report) {
		return this.switchToggleTriggerDevice.trigger(this, {}, {})
			.then(() => this.log('triggered ESH316GLEDREMOTE_toggle'))
			.catch(err => this.error('Error triggering ESH316GLEDREMOTE_toggle', err));
	}

	stepCommandParser(report) {
		var direction = report.stepmode === 0 ? 'right-turned' : 'left-turned';

		return this.switchDimTriggerDevice.trigger(this, {}, {
				action: `${direction}`
			})
			.then(() => this.log(`triggered ESH316GLEDREMOTE_dim, action=${direction}`))
			.catch(err => this.error('Error triggering ESH316GLEDREMOTE_dim', err));
	}
}
 module.exports = ESH316GLEDREMOTE;

 /*2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ZigBeeDevice has been inited
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ------------------------------------------
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] Node: 21eb127a-14ff-4e07-8d8f-7167630c04b1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] - Battery: true
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] - Endpoints: 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] -- Clusters:
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- zapp
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genBasic
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genBasic
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- zclVersion : 1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- appVersion : 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- hwVersion : 1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- manufacturerName : ELKO
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- modelId : ElkoDimmerRemoteZHA
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- powerSource : 3
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- swBuildId : 0.0.14
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genIdentify
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genIdentify
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- identifyTime : 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genOnOff
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genOnOff
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- onOff : null
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genLevelCtrl
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genLevelCtrl
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ----------------------------------------

// 2020-01-23 22:58:13 [log] [ManagerDrivers] [esh-316-endevender-rf] [0] { token: '7b55a008-5775-4bb2-b3e0-7f71eb39d63a',
// device: '0x000d6f000e9cbbf6',
// endpoint: '0',
// cluster: 'genOnOff',
// attr: 'toggle',
// value:
//  { src: { epId: 1, ieeeAddr: '0x000d6f000e9cbbf6', nwkAddr: 58125 },
//    command: 'toggle' },
// event: 'command' }


// 2020-01-23 22:54:46 [log] [ManagerDrivers] [esh-316-endevender-rf] [0] { token: 'fd1dfece-ae12-4f5f-84f4-4342795dc686',
// device: '0x000d6f000e9cbbf6',
// endpoint: '0',
// cluster: 'genLevelCtrl',
// attr: 'step',
// value:
//  { stepmode: 0,
//    stepsize: 12,
//    transtime: 65535,
//    src: { epId: 1, ieeeAddr: '0x000d6f000e9cbbf6', nwkAddr: 56436 },
//    command: 'step' },
// event: 'command' }


 */
