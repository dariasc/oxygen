/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  Request: {
    fields: {
      seq: {
        type: "uint32",
        id: 1
      },
      playerId: {
        type: "uint64",
        id: 2
      },
      playerToken: {
        type: "int32",
        id: 3
      },
      entityId: {
        type: "uint32",
        id: 4
      },
      getInfo: {
        type: "Empty",
        id: 8
      },
      getTime: {
        type: "Empty",
        id: 9
      },
      getMap: {
        type: "Empty",
        id: 10
      },
      getTeamInfo: {
        type: "Empty",
        id: 11
      },
      getTeamChat: {
        type: "Empty",
        id: 12
      },
      getEntityInfo: {
        type: "Empty",
        id: 14
      },
      checkSubscription: {
        type: "Empty",
        id: 16
      },
      getMapMarkers: {
        type: "Empty",
        id: 18
      }
    }
  },
  Message: {
    fields: {
      response: {
        type: "Response",
        id: 1
      }
    }
  },
  Response: {
    fields: {
      seq: {
        type: "uint32",
        id: 1
      },
      success: {
        type: "Empty",
        id: 4
      },
      error: {
        type: "Error",
        id: 5
      },
      info: {
        type: "Info",
        id: 6
      },
      map: {
        type: "Map",
        id: 8
      }
    }
  },
  Error: {
    fields: {
      error: {
        type: "string",
        id: 1
      }
    }
  },
  Info: {
    fields: {
      name: {
        type: "string",
        id: 1
      },
      headerImage: {
        type: "string",
        id: 2
      },
      url: {
        type: "string",
        id: 3
      },
      map: {
        type: "string",
        id: 4
      },
      mapSize: {
        type: "uint32",
        id: 5
      },
      wipeTime: {
        type: "uint32",
        id: 6
      },
      players: {
        type: "uint32",
        id: 7
      },
      maxPlayers: {
        type: "uint32",
        id: 8
      },
      queuedPlayers: {
        type: "uint32",
        id: 9
      },
      seed: {
        type: "uint32",
        id: 10
      },
      salt: {
        type: "uint32",
        id: 11
      }
    }
  },
  Map: {
    fields: {
      width: {
        type: "uint32",
        id: 1
      },
      height: {
        type: "uint32",
        id: 2
      },
      jpgImage: {
        type: "bytes",
        id: 3
      },
      oceanMargin: {
        type: "int32",
        id: 4
      },
      background: {
        type: "string",
        id: 6
      },
      monuments: {
        rule: "repeated",
        type: "Monument",
        id: 5
      }
    },
    nested: {
      Monument: {
        fields: {
          token: {
            type: "string",
            id: 1
          },
          x: {
            type: "float",
            id: 2
          },
          y: {
            type: "float",
            id: 3
          }
        }
      }
    }
  },
  Empty: {
    fields: {}
  }
});

module.exports = $root;
