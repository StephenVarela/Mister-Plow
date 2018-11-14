require 'test_helper'

class ResidenceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def test_residence_factory_is_valid

    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner
    assert(my_residence.valid?)
  end

  def test_check_homeOwner_association
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner

    actual = my_residence.home_owner
    expected = my_home_owner

    assert_equal(expected, actual)
  end

  def test_check_driveways_association
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner

    driveway1 = build(:driveway)
    driveway1.residence = my_residence
    driveway1.save

    driveway2 = build(:driveway)
    driveway2.residence = my_residence
    driveway2.save

    actual = my_residence.driveways.count
    expected = 2

    assert_equal(expected, actual)
  end

  def test_check_jobs_association
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner
    my_residence.save



    job1 = build(:job)
    job1.residence = my_residence
    job1.price = 30
    job1.scheduled_time = DateTime.now + 50000
    job1.save

    job2 = build(:job)
    job2.residence = my_residence
    job2.price = 30
    job2.scheduled_time = DateTime.now + 50000
    job2.save

    job3 = build(:job)
    job3.residence = my_residence
    job3.price = 30
    job3.scheduled_time = DateTime.now + 50000
    job3.save

    actual = my_residence.jobs.count
    expected = 3

    assert_equal(expected, actual)
  end

  def test_street_name_presence_validation
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save


    my_residence = build(:residence, street_name: nil)
    my_residence.home_owner = my_home_owner
    my_residence.valid?
    assert_includes(my_residence.errors.full_messages, "Street name can't be blank")
  end

  def test_city_name_presence_validation
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save


    my_residence = build(:residence, city_name: nil)
    my_residence.home_owner = my_home_owner
    my_residence.valid?
    assert_includes(my_residence.errors.full_messages, "City name can't be blank")
  end

  def test_postal_code_presence_validation
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save


    my_residence = build(:residence, postal_code: nil)
    my_residence.home_owner = my_home_owner
    my_residence.valid?
    assert_includes(my_residence.errors.full_messages, "Postal code can't be blank")
  end

  def test_country_presence_validation
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save


    my_residence = build(:residence, country: nil)
    my_residence.home_owner = my_home_owner
    my_residence.valid?
    assert_includes(my_residence.errors.full_messages, "Country can't be blank")
  end

end
