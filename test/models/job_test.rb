require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_job_factory_is_valid
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner
    my_residence.save

    my_job = build(:job)
    my_job.residence = my_residence
    my_job.price = 30
    my_job.scheduled_time = DateTime.now + 50000

    my_job.valid?
    p my_job.errors.full_messages
    assert(my_job.valid?)
  end
end
