# Elko SmartHome
Add support for Elko SmartHome to the Athom Homey

# Supports:
- **ESH 316GLED RF PH** - Dimmer (Still some bugs with forced_timeouts)
  http://proff.elko.no/elko-smart-home-316gled/esh-rs16-316gled-dimmer-rf-ph-article2622-1781.html
  - *Known bugs*:
    - forced_timeouts when multiple commands are sent from Homey app or Web app

- **ESH Super TR RF PH** - Thermostat
  http://proff.elko.no/elko-smart-home-super-termostat/esh-plus-super-tr-rf-ph-article2629-1779.html
  - Read floor and air temp
  - Read/Write Thermostat set temp
  - Read Heating status
  - Read Child lock status


## Plan for support:
  - **ESH Super TR RF PH**
    - See if air or floor temperature is active thermostat source

  - **New Elko SmartHome products - Late 2018 / early 2019 release**
    - ESH Plus wall Switch - 4 button Zigbee switch (Battery)
    - ESH Plus wall Switch with PIR - 4 button Zigbee switch (Battery)
    - ESH Plus wall Switch with dimmer - 5 button with dimmer wheel Zigbee switch (Battery)
    - ESH Socket relay - Zigbee
    - ESH Relay Puck - In wall Zigbee relay
    - ESH Dimmer Puck - in wall Zigbee dimmer

# Donate
 If you like the app, please donate so I can keep improving it!
 https://paypal.me/prj84

# Changelog

## Version: 0.0.4
- Added Elko ESH316 Remote (NOT Finish)
- Rewrite of Super TR FR PH driver to match Homey 2.0 software (NOT Finish)

## Version: 0.0.3

- Updated Meshdriver
- Turned of SetOnDim capability option to prevent forced_timeouts

## Version: 0.0.2
- Tested som new code to eliminate forced_timeouts with ESH316GLED

## Version: 0.0.1
- First beta
- Includes support for ESH 316GLED RF PH - Dimmer
- Includes support for ESH Super TR RF PH - Thermostat
