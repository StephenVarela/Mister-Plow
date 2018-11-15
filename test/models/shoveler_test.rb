require 'test_helper'

class ShovelerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_shoveler_factory_is_valid
    my_user = create(:user) #must sucessfully save to database and have a valid id
    my_shoveler = build(:shoveler)
    my_shoveler.user = my_user
    assert(my_shoveler.valid?)
  end

  def test_shoveler_belongs_to_user_association
    my_user = create(:user) #must sucessfully save to database and have a valid id
    my_shoveler = build(:shoveler)
    my_shoveler.user = my_user

    expected = my_user
    actual = my_shoveler.user
    assert_equal(expected, actual)
  end

  def test_shoveler_has_many_jobs

    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner
    my_residence.save

    my_user2 = create(:user, email:"UNIEQ@gmail.com")
    my_shoveler = build(:shoveler)
    my_shoveler.user = my_user2
    my_shoveler.save

    job1 = build(:job)
    job1.residence = my_residence
    job1.price = 30
    job1.scheduled_time = DateTime.now + 50000
    job1.shoveler = my_shoveler
    job1.save

    job2 = build(:job)
    job2.residence = my_residence
    job2.price = 30
    job2.scheduled_time = DateTime.now + 50000
    job2.shoveler = my_shoveler
    job2.save

    job3 = build(:job)
    job3.residence = my_residence
    job3.price = 30
    job3.scheduled_time = DateTime.now + 50000
    job3.shoveler = my_shoveler
    job3.save

    expected = 3
    actual = my_shoveler.jobs.count

    assert_equal(expected, actual)
  end

  

end
