<?php

/**
 * Plugin Name:       Accordion
 * Description:       Accordion block with collapsible rows.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ryan Skinner
 * Author URI:        https://ryanskinner.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accordion
 *
 * @package           rss-accordion
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function rss_accordion_block_init()
{
	register_block_type(__DIR__ . '/build/accordion');
	register_block_type(__DIR__ . '/build/accordion-row');
}
add_action('init', 'rss_accordion_block_init');

// Register the block's frontend script.
function rss_accordion_block_scripts()
{
	wp_register_script('rss-accordion-js', plugin_dir_url(__FILE__) . 'build/accordion/script.js', null, '0.1.0', true);
}
add_action('init', 'rss_accordion_block_scripts');
