import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

const TEMPLATE = [["rss/accordion-row"]];

function Accordion() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: TEMPLATE,
		template: TEMPLATE,
		templateLock: false,
	});

	return <div {...innerBlocksProps}></div>;
}

export default Accordion;
