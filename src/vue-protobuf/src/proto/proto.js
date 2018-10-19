/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  school: {
    nested: {
      PBClass: {
        fields: {
          classId: {
            type: "uint64",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          }
        }
      },
      PBStudent: {
        fields: {
          studentId: {
            type: "uint64",
            id: 0
          },
          user: {
            type: "PBUser",
            id: 1
          },
          "class": {
            type: "PBClass",
            id: 2
          },
          degree: {
            type: "PBStudentDegree",
            id: 3
          }
        }
      },
      PBStudentDegree: {
        values: {
          PRIMARY: 0,
          MIDDLE: 1,
          SENIOR: 2,
          COLLEGE: 3
        }
      },
      PBStudentListReq: {
        fields: {
          offset: {
            type: "uint32",
            id: 1
          },
          limit: {
            type: "uint32",
            id: 2
          }
        }
      }
    }
  },
  framework: {
    nested: {
      PBMessageRequest: {
        fields: {
          type: {
            type: "uint32",
            id: 1
          },
          messageData: {
            type: "bytes",
            id: 2
          },
          timestamp: {
            type: "uint64",
            id: 3
          },
          version: {
            type: "string",
            id: 4
          },
          token: {
            type: "string",
            id: 14
          }
        }
      },
      PBMessageResponse: {
        fields: {
          encrypted: {
            type: "bool",
            id: 1
          },
          compressed: {
            type: "bool",
            id: 2
          },
          type: {
            type: "uint32",
            id: 3
          },
          messageData: {
            type: "bytes",
            id: 4
          },
          appKey: {
            type: "string",
            id: 8
          },
          requestId: {
            type: "uint64",
            id: 5
          },
          resultCode: {
            type: "uint32",
            id: 6
          },
          resultInfo: {
            type: "string",
            id: 7
          }
        }
      },
      PBMessageType: {
        values: {
          getStudentList: 0
        }
      },
      PBUser: {
        fields: {
          userId: {
            type: "uint64",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          mobile: {
            type: "string",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;
