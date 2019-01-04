# talk-to-analyzer

CLI to talk to flow analyzers (pf300, citrex, ...)

## Install

### Pre requisites

- [node](https://nodejs.org/en/download/package-manager/) (see .nvmrc file for supported version)

### MacOS

```
brew install zmq
git clone git@github.com:eove/talk-to-analyzer.git
cd talk-to-analyzer
npm install -g node-gyp
npm install -g
```

### Linux, Raspberry

```
sudo apt-get install -y libglib2.0-dev libzmq3-dev
git clone git@github.com:eove/talk-to-analyzer.git
cd talk-to-analyzer
npm install -g node-gyp
npm install -g
```

## Usage

**✋ Read this first!**

- To display debug, prepend your command with `DEBUG=*,-serialport:*` (see: [debug](https://github.com/visionmedia/debug) documentation for more debug filtering explanations)
- You will need to pass a portName with the `--portName` option in the following examples.

**Display all decoded frames**

`DEBUG=*,-serialport:* talkToAnalyzer com -p /dev/tty.usbserial-FTZ8FGPX`

## Shell

You can interact with the running `talkToAnalyzer` process to make it send commands.

Start the interactive shell in another terminal with: `talkToAnalyzer shell` while `talkToAnalyzer com ...` is running.

    talk > help

Commands:

    help [command...]               Provides help for a given command.
    exit                            Exits application.
    run [command] [args]            Run the given [command], with optional JSON formatted [args] (see. examples)
    examples                        Show command examples

Tip: To be able to connect remotely, run: `DEBUG=*,-serialport:* talkToAnalyzer com -b 1800 -p /dev/ttyUSB1 -l 0.0.0.0:9876`
