'use strict';

/**
 * Oneshot.js controller
 *
 * @description: A set of functions called "actions" for managing `Oneshot`.
 */

module.exports = {

  /**
   * Retrieve oneshot records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.oneshot.search(ctx.query);
    } else {
      return strapi.services.oneshot.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a oneshot record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.oneshot.fetch(ctx.params);
  },

  /**
   * Count oneshot records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.oneshot.count(ctx.query);
  },

  /**
   * Create a/an oneshot record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.oneshot.add(ctx.request.body);
  },

  /**
   * Update a/an oneshot record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.oneshot.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an oneshot record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.oneshot.remove(ctx.params);
  }
};
