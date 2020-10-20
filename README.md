# Appium Aurora Driver

## Building

Build driver:

```
    npm install
    npm run prepare
    npm pack
```

Build Appium with new driver:

```
    npm install --production
    npm install appium-sailfish-driver.tgz --save
    npm install
    npm run build
```

## Usage (python example)

Install `Appium-Python-Client` python module to work with Appium

```
from appium import webdriver

desired_caps = {}
desired_caps['platformName'] = 'Aurora'
desired_caps['platformVersion'] = '3.0'
desired_caps['appPackage'] = '/usr/bin/application'
desired_caps['deviceName'] = '192.168.2.15'

driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)

driver.find_element_by_class_name('Label')
el = driver.find_elements_by_accessibility_id('ID')
el.click();
el.text

driver.get_screenshot_as_base64()

time = driver.device_time
print(time) # Return text Thu Sep  6 14:58:57 MSK 2018
```
