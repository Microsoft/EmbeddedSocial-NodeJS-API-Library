/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * <autogenerated> This file was generated using AutoRest. </autogenerated>
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the FeedResponseReplyView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
function FeedResponseReplyView() {
}

/**
 * Defines the metadata of FeedResponseReplyView
 *
 * @returns {object} metadata of FeedResponseReplyView
 *
 */
FeedResponseReplyView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FeedResponse[ReplyView]',
    type: {
      name: 'Composite',
      className: 'FeedResponseReplyView',
      modelProperties: {
        data: {
          required: true,
          serializedName: 'data',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ReplyViewElementType',
                type: {
                  name: 'Composite',
                  className: 'ReplyView'
                }
            }
          }
        },
        cursor: {
          required: true,
          serializedName: 'cursor',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = FeedResponseReplyView;
