"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import CodeBlock from "@tiptap/extension-code-block";

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image, CodeBlock],
    content: value || "<p>Start writing...</p>",
    immediatelyRender: false, // ✅ prevents SSR hydration issues
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // ✅ Sync external content
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "<p></p>");
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="w-full border rounded-md shadow-sm p-3 bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 border-b pb-2 mb-3">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 text-sm rounded ${
            editor.isActive("bold") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 text-sm rounded italic ${
            editor.isActive("italic") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 text-sm rounded line-through ${
            editor.isActive("strike") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          S
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-2 py-1 text-sm rounded ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-100 text-blue-700"
              : "hover:bg-gray-100"
          }`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-2 py-1 text-sm rounded ${
            editor.isActive("heading", { level: 2 })
              ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 text-sm rounded ${
            editor.isActive("bulletList") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 text-sm rounded ${
            editor.isActive("orderedList") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          1.
        </button>
        <button
          onClick={() =>
            editor.chain().focus().setLink({ href: prompt("Enter URL") || "" }).run()
          }
          className="px-2 py-1 text-sm rounded hover:bg-gray-100"
        >
          🔗
        </button>
        <button
          onClick={() =>
            editor.chain().focus().setImage({ src: prompt("Enter Image URL") || "" }).run()
          }
          className="px-2 py-1 text-sm rounded hover:bg-gray-100"
        >
          🖼️
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-2 py-1 text-sm rounded font-mono ${
            editor.isActive("codeBlock") ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
          }`}
        >
          {"</>"}
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="prose prose-sm min-h-[200px] p-3 focus:outline-none"
      />
    </div>
  );
}
