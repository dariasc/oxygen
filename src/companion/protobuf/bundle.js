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
        rule: "required",
        type: "uint64",
        id: 2
      },
      playerToken: {
        rule: "required",
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
        rule: "required",
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
      }
    }
  },
  Error: {
    fields: {
      error: {
        rule: "required",
        type: "string",
        id: 1
      }
    }
  },
  Info: {
    fields: {
      name: {
        rule: "required",
        type: "string",
        id: 1
      },
      headerImage: {
        rule: "required",
        type: "string",
        id: 2
      },
      url: {
        rule: "required",
        type: "string",
        id: 3
      },
      map: {
        rule: "required",
        type: "string",
        id: 4
      },
      mapSize: {
        rule: "required",
        type: "uint32",
        id: 5
      },
      wipeTime: {
        rule: "required",
        type: "uint32",
        id: 6
      },
      players: {
        rule: "required",
        type: "uint32",
        id: 7
      },
      maxPlayers: {
        rule: "required",
        type: "uint32",
        id: 8
      },
      queuedPlayers: {
        rule: "required",
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
  Empty: {
    fields: {}
  }
});

module.exports = $root;
