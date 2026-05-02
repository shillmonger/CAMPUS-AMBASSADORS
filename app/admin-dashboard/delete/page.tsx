"use client";

import React, { useState, useEffect } from "react";
import {
  Trash2,
  User,
  Building,
  Mail,
  ArrowLeft,
  Search,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/component/landing-page/footer";

interface Speaker {
  _id: string;
  name: string;
  role: string;
  organization: string;
  imageUrl: string;
  type: "speaker";
}

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  email: string;
  linkedinUrl: string;
  imageUrl: string;
  type: "team";
}

type Item = Speaker | TeamMember;

const DeleteManagementPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [speakersRes, teamRes] = await Promise.all([
        fetch("/api/speakers"),
        fetch("/api/team"),
      ]);

      const speakersData = await speakersRes.json();
      const teamData = await teamRes.json();

      if (speakersData.success && teamData.success) {
        const speakers = speakersData.data.map((s: any) => ({
          ...s,
          type: "speaker" as const,
        }));
        const team = teamData.data.map((t: any) => ({
          ...t,
          type: "team" as const,
        }));
        setItems([...speakers, ...team]);
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to load data" });
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = async (id: string, type: "speaker" | "team") => {
    try {
      const endpoint = type === "speaker" ? "speakers" : type;
      const response = await fetch(`/api/${endpoint}/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        setItems(items.filter((item) => item._id !== id));
        setMessage({ type: "success", text: result.message });
      } else {
        setMessage({ type: "error", text: result.error });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to delete item" });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafa]">
      <div className="container mx-auto max-w-5xl px-4 py-20">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              href="/admin-dashboard/dashboard"
              className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors mb-2"
            >
              <ArrowLeft size={18} /> <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-3xl font-black text-black">Manage Entries</h1>
            <p className="text-zinc-500">
              Remove speakers or team members from the website.
            </p>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-xl font-medium ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name or role..."
            className="w-full text-black rounded-2xl border border-zinc-200 bg-white py-4 pl-12 pr-4 outline-none focus:ring-4 focus:ring-[#25D366]/10 focus:border-[#25D366] transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Data List */}
        <div className="overflow-hidden rounded-[32px] border border-zinc-100 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 border-b border-zinc-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Member
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Details
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {loading ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-20 text-center text-zinc-500"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="mb-4 rounded-full bg-zinc-100 p-4">
                          <AlertTriangle className="text-zinc-400" size={32} />
                        </div>
                        <p className="text-lg font-bold text-zinc-900">
                          No members found
                        </p>
                        <p className="text-zinc-500">
                          Try adjusting your search term.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr
                      key={item._id}
                      className="group hover:bg-zinc-50/50 transition-colors"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              fill
                              className="object-cover cursor-pointer"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                target.nextElementSibling?.classList.remove(
                                  "hidden",
                                );
                              }}
                            />
                            <div className="hidden flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                              <User size={20} />
                            </div>
                          </div>
                          <span className="font-bold text-zinc-900">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-block rounded-lg px-3 py-1 text-xs font-bold uppercase ${
                            item.type === "speaker"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-zinc-500">
                        <div className="flex flex-col">
                          <span className="font-medium text-zinc-700">
                            {item.role}
                          </span>
                          <span className="flex items-center gap-1">
                            {item.type === "speaker" ? (
                              <>
                                <Building size={12} />
                                {(item as Speaker).organization}
                              </>
                            ) : (
                              <>
                                <Mail size={12} />
                                {(item as TeamMember).email}
                              </>
                            )}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        {deletingId === item._id ? (
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setDeletingId(null)}
                              className="rounded-lg bg-zinc-100 cursor-pointer px-3 py-1 text-xs font-bold text-zinc-600 hover:bg-zinc-200"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleDelete(item._id, item.type)}
                              className="rounded-lg bg-red-600 cursor-pointer px-3 py-2 text-xs font-bold text-white hover:bg-red-700 shadow-md shadow-red-200"
                            >
                              Confirm
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeletingId(item._id)}
                            className="inline-flex cursor-pointer h-10 w-10 items-center justify-center rounded-xl text-zinc-400 hover:bg-red-50 hover:text-red-600 transition-all"
                          >
                            <Trash2 size={20} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DeleteManagementPage;
