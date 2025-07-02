"use client";
import { useEffect, useState } from "react";
import { z } from "zod";

const serviceSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.string().url("Image must be a valid URL"),
  url: z.string().url("URL must be a valid link").optional().or(z.literal("")),
});

type Service = z.infer<typeof serviceSchema> & { id: string };

const initialForm = {
  title: "",
  description: "",
  image: "",
  url: "",
};

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState(initialForm);
  const [editId, setEditId] = useState<string | null>(null);
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});

  const fetchServices = async () => {
    const res = await fetch("/api/services");
    const data = await res.json();
    setServices(data);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const result = serviceSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        title: fieldErrors.title?.[0],
        description: fieldErrors.description?.[0],
        image: fieldErrors.image?.[0],
        url: fieldErrors.url?.[0],
      });
      return;
    }

    setErrors({});

    if (editId) {
      await fetch(`/api/services/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      setEditId(null);
    } else {
      await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
    }

    setFormData(initialForm);
    fetchServices();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/services/${id}`, { method: "DELETE" });
    fetchServices();
  };

  const handleEdit = (service: Service) => {
    setFormData({
      title: service.title,
      description: service.description,
      image: service.image,
      url: service.url || "",
    });
    setEditId(service.id);
  };

  const cancelEdit = () => {
    setEditId(null);
    setFormData(initialForm);
    setErrors({});
  };

  return (
    <div className="pt-20 mx-auto text-white max-w-4xl items-center justify-center pb-20 ">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Services</h1>

      {/* Form */}
      <div className="bg-blue-950 p-6 rounded-xl shadow space-y-4 mb-10">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-white/10 rounded"
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-white/10 rounded"
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border border-white/10 rounded"
          />
          {errors.image && (
            <p className="text-red-400 text-sm mt-1">{errors.image}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="url"
            placeholder="Learn More URL"
            value={formData.url}
            onChange={handleChange}
            className="w-full p-2 border border-white/10 rounded"
          />
          {errors.url && (
            <p className="text-red-400 text-sm mt-1">{errors.url}</p>
          )}
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            {editId ? "Update Service" : "Add Service"}
          </button>
          {editId && (
            <button
              onClick={cancelEdit}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Service List */}
      <ul className="space-y-6 max-w-xl">
        {services.map((s) => (
          <li
            key={s.id}
            className="p-4 border border-white/10 bg-blue-950 rounded-xl shadow"
          >
            <h2 className="font-semibold text-lg">{s.title}</h2>
            <p className="text-sm text-white">{s.description}</p>
            <div className="flex gap-4 mt-3">
              <button
                onClick={() => handleEdit(s)}
                className="text-black font-bold bg-amber-300 px-4 py-2 rounded-xl"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(s.id)}
                className="text-black font-bold bg-amber-300 px-4 py-2 rounded-xl"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
