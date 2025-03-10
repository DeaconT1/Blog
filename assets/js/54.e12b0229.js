(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{426:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("In the previous section, we explained how to produce the four types of tree traversals—"),t("em",[e._v("LevelOrder")]),e._v(", "),t("em",[e._v("PreOrder")]),e._v(", "),t("em",[e._v("PostOrder")]),e._v(", and "),t("em",[e._v("InOrder")]),e._v("—for a given tree. Now, let us reverse the problem: if we are given one or more traversals of an existing tree, can we reconstruct that tree and also derive its other traversals? The answer is typically yes. Next, we will examine several scenarios, including cases where reconstruction is possible and cases where it is not.")]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("笔记")]),e._v(" "),t("p",[e._v("In this chapter, all discussions refer to Binary Trees or Binary Search Trees.")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"single-traversal-not-enough-to-determine-a-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#single-traversal-not-enough-to-determine-a-tree"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Single Traversal: Not Enough to Determine a Tree")])]),e._v(" "),t("p",[e._v("First, consider the case where "),t("strong",[e._v("only one traversal")]),e._v(" is given:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("LevelOrder")]),e._v(": If the number of elements is exactly 1, 3, 7, 15, and so on (i.e., 2^h+1^- 1), then the tree must be a "),t("strong",[e._v("perfect tree")]),e._v(", making it possible to reconstruct. Otherwise, we cannot decide how to fill any partially empty level.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("PostOrder")]),e._v(", "),t("strong",[e._v("InOrder")]),e._v(", or "),t("strong",[e._v("PreOrder")]),e._v(" alone do not suffice. For instance, multiple different trees can share the same single traversal sequence.")])]),e._v(" "),t("li",[t("p",[e._v("For PostOrder：")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("     (1)                 (1)\n    /   \\                   \\\n  (3)   (2)                  (2)\n                               \\\n                                (3)\n\n")])])]),t("ul",[t("li",[e._v("For InOrder and PreOrder:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("     (1)                (1)     \n        \\              /   \\\n         (2)         (2)   (3)\n           \\\n            (3)\n")])])]),t("p",[e._v("Clearly, for a single given traversal, we can usually find "),t("strong",[e._v("different tree structures")]),e._v(" that produce the same traversal sequence.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"when-two-traversals-fail-to-determine-a-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-two-traversals-fail-to-determine-a-tree"}},[e._v("#")]),e._v(" "),t("strong",[e._v("When Two Traversals Fail to Determine a Tree")])]),e._v(" "),t("p",[t("strong",[e._v("Cases Where Two Given Traversals Fail to Determine the Tree Structure (Excluding LevelOrder):")])]),e._v(" "),t("ul",[t("li",[e._v("Given two traversals—PreOrder (root → left subtree → right subtree) and PostOrder (left subtree → right subtree → root)—we can identify the root node from the first element of PreOrder and the last element of PostOrder. However, we cannot perfectly determine how the left and right subtrees are distributed, which can lead to different tree shapes yielding the same pair of traversals.")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"two-traversals-that-uniquely-determine-a-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#two-traversals-that-uniquely-determine-a-tree"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Two Traversals That Uniquely Determine a Tree")])]),e._v(" "),t("p",[e._v("Finally, let’s discuss the scenarios in which two given traversals can "),t("strong",[e._v("precisely")]),e._v(" determine a tree’s structure.")]),e._v(" "),t("blockquote",[t("p",[e._v("The given traversals must be Post-Order + InOrder "),t("strong",[e._v("or")]),e._v(" PreOrder + InOrder.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("This article focuses on one such scenario; the other follows a similar logic and can be deduced independently.")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("We will focus on "),t("strong",[e._v("PostOrder + InOrder")]),e._v(" here")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Key Insight")]),e._v(": The last node in postorder is always the "),t("strong",[e._v("root")]),e._v(". In inorder, all nodes to the left of the root belong to the "),t("strong",[e._v("left subtree")]),e._v(", and all to the right belong to the "),t("strong",[e._v("right subtree")]),e._v(".")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Recursive Idea")]),e._v(":")])])]),e._v(" "),t("ol",[t("li",[e._v("Identify the root from postorder’s last element.")]),e._v(" "),t("li",[e._v("Find that root in inorder. Everything to the left is the left subtree, and everything to the right is the right subtree.")]),e._v(" "),t("li",[e._v("Determine which parts of postorder correspond to these subtrees.")]),e._v(" "),t("li",[e._v("Recursively repeat this partitioning for left and right subtrees.")])]),e._v(" "),t("p",[e._v("Because each subtree division is "),t("strong",[e._v("unique")]),e._v(" when node values are distinct, the original tree is reconstructed unambiguously.")]),e._v(" "),t("h3",{attrs:{id:"one-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#one-example"}},[e._v("#")]),e._v(" One Example")])])}),[],!1,null,null,null);t.default=a.exports}}]);