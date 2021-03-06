# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_12_232348) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "driveways", force: :cascade do |t|
    t.integer "residence_id"
    t.string "location"
    t.integer "size"
    t.text "instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "home_owners", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.integer "shoveler_id"
    t.integer "residence_id"
    t.integer "price"
    t.text "instructions"
    t.datetime "scheduled_time"
    t.boolean "premium_rush"
    t.boolean "premium_peak_hours"
    t.datetime "check_in"
    t.datetime "check_out"
    t.integer "rating"
    t.text "comments"
    t.boolean "confirmation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "accepted"
  end

  create_table "residences", force: :cascade do |t|
    t.integer "home_owner_id"
    t.string "street_name"
    t.string "city_name"
    t.string "postal_code"
    t.string "country"
    t.boolean "is_home_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lon"
    t.float "lat"
  end

  create_table "shovelers", force: :cascade do |t|
    t.integer "user_id"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "street_name"
    t.string "city_name"
    t.string "postal_code"
    t.string "country"
    t.string "email"
    t.string "primary_contact_number"
    t.string "secondary_contact_number"
    t.integer "e_wallet"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "crypted_password"
    t.string "salt"
    t.boolean "is_shoveler"
  end

  create_table "weathers", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "city_name"
    t.text "forecast"
  end

end
