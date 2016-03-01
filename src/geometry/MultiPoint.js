/**
 * @classdesc
 * Represents a Geometry type of MultiPoint.
 * @class
 * @extends maptalks.MultiPoly
 * @param {Number[][]|maptalks.Coordinate[]|maptalks.Marker[]} data - construct data, coordinates or a array of markers
 * @param {Object} [options=null]           - specific construct options for MultiPoint, also support options defined in [Geometry]{@link maptalks.Geometry#options}
 * @param {Object} [options.symbol=object]  - default symbol of the MultiPoint.
 */
Z.MultiPoint = Z.MultiPoly.extend(/** @lends maptalks.MultiPoint.prototype */{
    GeometryType:Z.Marker,

    /**
     * @property {String} type - MultiPoint
     * @static
     */
    type:Z.Geometry['TYPE_MULTIPOINT'],

    /**
     * @property {Object} [options=null]           - specific options for MultiPoint, also support options defined in [Geometry]{@link maptalks.Geometry#options}
     * @property {Object} [options.symbol=object]  - default symbol of the MultiPoint.
     */
    options:{
        'symbol':{
            'markerType'    : 'pie',
            'markerHeight'  : 24,
            'markerWidth'   : 24,
            'markerFill'    : "#de3333",
            "markerLineColor" : "#ffffff",
            "markerLineWidth" : 1
        }
    },

    initialize:function(data, opts) {
        this._initOptions(opts);
        this._initData(data);
    }
});
