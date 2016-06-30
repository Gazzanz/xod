import * as EDITOR_MODE from './constants/editorModes';
import * as NODE_CATEGORY from './constants/nodeCategory';
import * as PIN_TYPE from './constants/pinType';

const initialState = {
  project: {
    meta: {
      name: 'Awesome project',
      author: 'Amperka team',
    },
    patches: {
      1: {
        id: 1,
        name: 'Skynet',
      },
    },
    nodes: {
      1: {
        id: 1,
        typeId: 4,
        patchId: 1,
        position: {
          x: 240,
          y: 110,
        },
        props: {
          brightness: 0.67,
        },
      },
      2: {
        id: 2,
        typeId: 1,
        patchId: 1,
        position: {
          x: 360,
          y: 300,
        },
      },
      3: {
        id: 3,
        typeId: 3,
        patchId: 1,
        position: {
          x: 80,
          y: 20,
        },
      },
      4: {
        id: 4,
        typeId: 2,
        patchId: 1,
        position: {
          x: 170,
          y: 380,
        },
      },
      5: {
        id: 5,
        typeId: 5,
        patchId: 1,
        position: {
          x: 30,
          y: 185,
        },
      },
    },
    pins: {
      1: {
        id: 1,
        nodeId: 1,
        key: 'in',
      },
      2: {
        id: 2,
        nodeId: 2,
        key: 'in',
      },
      3: {
        id: 3,
        nodeId: 2,
        key: 'out',
      },
      4: {
        id: 4,
        nodeId: 3,
        key: 'out',
      },
      5: {
        id: 5,
        nodeId: 4,
        key: 'in1',
      },
      6: {
        id: 6,
        nodeId: 4,
        key: 'in2',
      },
      7: {
        id: 7,
        nodeId: 4,
        key: 'out',
      },
      8: {
        id: 8,
        nodeId: 5,
        key: 'out',
      },
    },
    links: {
      1: {
        id: 1,
        fromPinId: 4,
        toPinId: 1,
      },
      2: {
        id: 2,
        fromPinId: 4,
        toPinId: 6,
      },
    },
  },
  editor: {
    currentPatchId: 1,
    mode: EDITOR_MODE.EDITING,
    dragging: null,
    selection: [],
    selectedPin: null,
  },
  nodeTypes: {
    1: {
      id: 1,
      name: 'not',
      category: NODE_CATEGORY.FUNCTIONAL,
      pins: {
        in: {
          key: 'in',
          type: PIN_TYPE.INPUT,
          label: 'in',
        },
        out: {
          key: 'out',
          type: PIN_TYPE.OUTPUT,
          label: 'out',
        },
      },
    },
    2: {
      id: 2,
      name: 'either',
      category: NODE_CATEGORY.FUNCTIONAL,
      pins: {
        in1: {
          key: 'in1',
          type: PIN_TYPE.INPUT,
          label: 'in1',
        },
        in2: {
          key: 'in2',
          type: PIN_TYPE.INPUT,
          label: 'in2',
        },
        out: {
          key: 'out',
          type: PIN_TYPE.OUTPUT,
          label: 'out',
        },
      },
    },
    3: {
      id: 3,
      name: 'pot',
      category: NODE_CATEGORY.HARDWARE,
      pins: {
        out: {
          key: 'out',
          type: PIN_TYPE.OUTPUT,
          label: 'out',
        },
      },
    },
    4: {
      id: 4,
      name: 'led',
      category: NODE_CATEGORY.WATCH,
      pins: {
        in: {
          key: 'in',
          type: PIN_TYPE.INPUT,
          label: 'in',
        },
      },
    },
    5: {
      id: 5,
      name: 'servo',
      category: NODE_CATEGORY.HARDWARE,
      pins: {
        out: {
          key: 'out',
          type: PIN_TYPE.OUTPUT,
          label: 'out',
        },
      },
    },
    6: {
      id: 6,
      name: 'config',
      category: NODE_CATEGORY.CONFIGURATION,
      pins: {
        out: {
          key: 'out',
          type: PIN_TYPE.OUTPUT,
          label: 'out',
        },
      },
    },
  },
};

export default initialState;
